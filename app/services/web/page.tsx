export const metadata = {
    title: 'Page Service',
    description: 'page services',
};

async function getData() {
    const res = await fetch(
        'http://worldtimeapi.org/api/timezone/Asia/Kolkata'
    );
    const json = await res.json();
    return json;
}

const WebServices = async () => {
    const json = await getData();
    console.log('json', json);
    return (
        <>
            <div className="bg-red-100">web services</div>
            <p className="text-16 text-bold">{json.datetime}</p>
        </>
    );
};

export default WebServices;
