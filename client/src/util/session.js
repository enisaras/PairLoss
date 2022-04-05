export const logout = () => (
    fetch("http://localhost:3003/api/session", { method: "DELETE", 'credentials': "include"})
  );
