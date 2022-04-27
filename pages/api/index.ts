const umamiID = async (req, res) => {
    res.status(200).send(process.env.UMAMI_ID);
}

export default umamiID;
