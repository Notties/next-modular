type Env = {
  API_URL: string;
};

const environment: Env = {
  API_URL: `${process.env.NEXT_PUBLIC_API_URL}`,
};

export default environment;
