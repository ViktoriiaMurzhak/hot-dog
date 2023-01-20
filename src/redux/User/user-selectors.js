export const selectSlimDaddy = state => state.slimDaddy.slimDaddy;
export const selectEmail = state => state.user.email;
export const selectName = state => state.user.name;
export const selectId = state => state.user._id;
export const selectPhone = state => state.user.phone;
export const selectPets = state => state.user.pets;
export const selectAvatarURL = state => state.user.avatarURL;
export const selectNotice = state => state.user.notice;
export const selectBirthday = state => state.user.birthday;
export const selectLocation = state => state.user.location;
export const selectToken = state => state.user.token;

export const selector = state => state;
