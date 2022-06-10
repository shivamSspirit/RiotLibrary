import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = function (request) {
  console.log('req from authutils',request)
  const encodedToken = request.requestHeaders.encodedToken;
  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
     console.log('decoded')
    const user = this.db.users.findBy({ email: decodedToken.email });
    console.log(user)
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

 const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

 export default formatDate
 
