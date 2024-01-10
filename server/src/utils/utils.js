const isProd = () => {
  console.log(process.env);
};

const isStaging = () => {
  console.log(process.env);
};

export { isProd, isStaging };
