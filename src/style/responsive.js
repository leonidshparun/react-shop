const size = {
  mobileS: '420px',
  mobileM: '480px',
  mobileL: '620px',
  tablet: '768px',
  laptopS: '960px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px'
};

const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`
};

export default devices;
