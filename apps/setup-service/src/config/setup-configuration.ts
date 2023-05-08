import SetupConfig from '../../setup.json';
// const JSON_CONFIG_FILENAME = 'setup.json';

export default () => {
  return SetupConfig as Record<string, any>;
};
