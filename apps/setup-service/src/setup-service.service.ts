import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class SetupServiceService {
  private readonly logger = new Logger(SetupServiceService.name);
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}
  async checkIsSetup(apiKey: string) {
    this.logger.log(apiKey);
    this.logger.log(this.configService.get('sapa_crm.user_base_url'));
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `${this.configService.get('sapa_crm.user_base_url')}/company/lookup`,
          {
            params: { 'api-key': apiKey },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error);
            throw 'An error happened!';
          }),
        ),
    );
    this.logger.log(data);
    return data?.data;
  }

  checkDbConnection() {
    return '';
  }

  setupSapaCrm() {
    return '';
  }
}
