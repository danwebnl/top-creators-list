// user_2 has 3 products
// user_3 has 2 products
// user_1 has 1 product
// user_4 has 1 product
// between user_1 and user_4, user_4 has the more recent createTime value

const mockResponse = {
  creators: [
    {
      id: "user_1",
      email: "user_1_email",
    },
    {
      id: "user_2",
      email: "user_2_email",
    },
    {
      id: "user_3",
      email: "user_3_email",
    },
    {
      id: "user_4",
      email: "user_4_email",
    },
  ],
  products: [
    {
      id: "product_1",
      creatorId: "user_1",
      createTime: "2023-02-01T10:43:59.752768+01:00",
    },
    {
      id: "product_2",
      creatorId: "user_3",
      createTime: "2023-02-06T10:43:59.752768+01:00",
    },
    {
      id: "product_3",
      creatorId: "user_3",
      createTime: "2023-01-06T10:43:59.752768+01:00",
    },
    {
      id: "product_4",
      creatorId: "user_2",
      createTime: "2023-04-06T10:43:59.752768+01:00",
    },
    {
      id: "product_5",
      creatorId: "user_2",
      createTime: "2023-05-06T10:43:59.752768+01:00",
    },
    {
      id: "product_6",
      creatorId: "user_2",
      createTime: "2023-03-06T10:43:59.752768+01:00",
    },
    {
      id: "product_7",
      creatorId: "user_4",
      createTime: "2023-02-09T10:43:59.752768+01:00",
    },
  ],
};

export default mockResponse;
