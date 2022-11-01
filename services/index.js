export const BLOG_BASE_URL =
  'https://tif-react-assignment-api.herokuapp.com/blog';

export const getBlogs = async (pageNumber) => {
  const blogs = await fetch(`${BLOG_BASE_URL}/get-all?page=${pageNumber}`).then(
    (res) => res.json()
  );
  return blogs.data;
};

export const getBlog = async (slug) => {
  const blog = await fetch(`${BLOG_BASE_URL}/get-single?slug=${slug}`).then(
    (res) => res.json()
  );
  return blog.data;
};

export const getAllBlogs = async () => {
  let blogs = [];
  for (let i = 1; i > 0; i++) {
    const blog = await getBlogs(i);
    if (blog.length === 0) {
      break;
    }
    blogs = [...blogs, ...blog];
  }
  return blogs;
};
