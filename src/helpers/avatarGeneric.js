export const avatarGeneric = (user) => {
  if (!user) {
    return `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <rect width="100" height="100" fill="#f9b03d" />
      </svg>
      `)}`;
  }
  const firstName = user.first_name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const lastName = user.last_name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1"];
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const color = colors[initials.charCodeAt(0) % colors.length];
  const avatar = `data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
              <rect width="100" height="100" fill="${color}" />
              <text x="50%" y="65%" font-size="50" fill="#FFF" alignment-baseline="middle" text-anchor="middle"  font-family="Arial, sans-serif">${initials}</text>
            </svg>
          `)}`;
  return avatar;
};
