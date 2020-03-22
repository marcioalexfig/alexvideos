const xvideos = require('@rodrigogs/xvideos');
const funcao = async () => {
    const fresh = await xvideos.videos.fresh({ page: 1 });
    fresh.videos.forEach(async (element) => {
        let detalhe = await xvideos.videos.details(element)
        console.log(detalhe.files.high);
    });
}
funcao();