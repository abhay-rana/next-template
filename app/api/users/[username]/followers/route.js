const post = [
    {
        id: 1,
        name: 'hello abhay',
        description: '',
    },
];

export const GET = (req, route) => {
    const dymanic_params = route.params?.username;
    console.log('dunamic_pa', dymanic_params);
    const name = new URL(req.url).searchParams.get('name'); //query params
    console.log(name);
    return Response.json(post);
};

export const POST = async (req) => {
    console.log('req', req.url);
    const name = new URL(req.url).searchParams.get('name'); //getting the search params in the post request
    console.log('name', name);
    const body = await req.json(); //getting the data
    console.log('body', body);
    post.push(body);
    return Response.json({
        message: 'Post request',
    });
};
