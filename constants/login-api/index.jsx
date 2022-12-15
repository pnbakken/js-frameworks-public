const MY_WORDPRESS = process.env.NEXT_PUBLIC_LOCAL_WORDPRESS_URL;
export const LOGIN_URL = MY_WORDPRESS + "/wp-json/jwt-auth/v1/token";

// url located in .env file in root. Please use a wordpress instance with jwt-auth plugin configured.
