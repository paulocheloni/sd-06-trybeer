export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const REG_NAME = 'REG_NAME';
export const REG_EMAIL = 'REG_EMAIL';
export const REG_PASS = 'REG_PASS';
export const PROFILE_NAME = 'PROFILE_NAME';

export const validEmail = (boolean) => ({
  type: EMAIL,
  boolean,
});

export const validPassword = (boolean) => ({
  type: PASSWORD,
  boolean,
});

export const validNameReg = (boolean) => ({
  type: REG_NAME,
  boolean,
});

export const validEmailReg = (boolean) => ({
  type: REG_EMAIL,
  boolean,
});

export const validPassReg = (boolean) => ({
  type: REG_PASS,
  boolean,
});

export const profileName = (name) => ({
  type: PROFILE_NAME,
  name,
});
