export const GET = (req, route) => {
    return Response.json({
        message: 'Hello this is abhay rana',
        value: route.params.username,
    });
};
