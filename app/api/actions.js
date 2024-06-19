// "use server";
//
// import prisma from "../../utils/connection";

// export const getContact = async () => {
//   const data = prisma.contact.findFirst({
//     select: { telephone: true, email: true, location: true },
//   });
//   return data;
// };
//
// export const getSocials = async () => {
//   const data = prisma.socials.findMany({
//     select: { name: true, url: true, username: true },
//   });
//   return data;
// };
