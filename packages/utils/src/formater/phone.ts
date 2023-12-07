export const phoneFormater = (phone?: string) => {
  if (!phone) return '';

  if (phone.length === 10)
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  else return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
};
