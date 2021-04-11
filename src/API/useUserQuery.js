export default function useUserQuery(username, pass) {
	const userQuery = `query getUserByNamePass{
    listUsers(filter: {
      username: {
        contains: "${username}"
      }
      password:{
        contains: "${pass}"
      }
    }) {
      items {
        id
      }
    }
  }`;
	return userQuery;
}
