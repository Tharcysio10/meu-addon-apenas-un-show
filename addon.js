const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "community.apenasunshowt4",
    version: "1.0.0",
    name: "Apenas um Show - Temporada 4",
    description: "Episódios da 4ª Temporada dublados em Português (.mkv)",
    resources: ["catalog", "stream"],
    types: ["movie"], 
    catalogs: [
        {
            type: "movie",
            id: "apenas_um_show_t4",
            name: "Apenas um Show - T4"
        }
    ]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler((args) => {
    if (args.id === "apenas_um_show_t4") {
        return Promise.resolve({
            metas: [
                {
                    id: "regular_show_t4_id",
                    type: "movie",
                    name: "Apenas um Show (Temporada 4)",
                    poster: "https://images.justwatch.com/poster/176342880/s718/regular-show.webm",
                    description: "Lista personalizada com os 37 episódios da 4ª temporada."
                }
            ]
        });
    }
    return Promise.resolve({ metas: [] });
});

builder.defineStreamHandler((args) => {
    if (args.id === "regular_show_t4_id") {
        return Promise.resolve({
            streams: [
                { title: "T4: Ep 01", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-01+Sa%C3%ADda+9B+-+HD+720p.mkv" },
                { title: "T4: Ep 02", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-02+O+faz+tudo.mkv" },
                { title: "T4: Ep 03", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-03+Contos+de+terror+no+parque+-+HD+720p.mkv" },
                { title: "T4: Ep 04", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-04+Concurso+de+tortas.mkv" },
                { title: "T4: Ep 05", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-05+O+Grande+Solo+-+HD.MKV" },
                { title: "T4: Ep 06", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-06+Carequinha+-+HD.mkv" },
                { title: "T4: Ep 07", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-07+Noite+da+rapaziada.mkv" },
                { title: "T4: Ep 08", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-08+Uma+flex%C3%A3o.mp4" },
                { title: "T4: Ep 09", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-09+Especial+de+Natal+-+HD+720p.mkv" },
                { title: "T4: Ep 10", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-10+Terca+feira.mkv" },
                { title: "T4: Ep 11", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-11+Correndo+Atr%C3%A1s+dos+Fogos+de+Artif%C3%ADcio+-+HD.mkv" },
                { title: "T4: Ep 12", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-12+O+fim+de+semana+comprido.mp4" },
                { title: "T4: Ep 13", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-13+Sanduiche+Mortal+-+HD+720p.mkv" },
                { title: "T4: Ep 14", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-14+Ser%C3%A1+que+Ace+Balthazar+est%C3%A1+Vivo+-+HD.mkv" },
                { title: "T4: Ep 15", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-15+Beijo+ou+fralda.mkv" },
                { title: "T4: Ep 16", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-16+Zoando+-+HD.mkv" },
                { title: "T4: Ep 17", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-17+Homem+das+Cavernas.mp4" },
                { title: "T4: Ep 18", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-18+Essa+Televis%C3%A3o+%C3%A9+Minha+-+HD.mkv" },
                { title: "T4: Ep 19", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-19+Um+Bando+de+Gansos+Grandes+-+HD.mkv" },
                { title: "T4: Ep 20", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-20+Me+engana+que+eu+nao+gosto.mp4" },
                { title: "T4: Ep 21", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-21+Almoco+na+limousine.mp4" },
                { title: "T4: Ep 22", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-22+buscando+a+margarete.mp4" },
                { title: "T4: Ep 23", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-23+Um+Pedido+Especial.mp4" },
                { title: "T4: Ep 24", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-24+Tudo+Por+um+show.mp4" },
                { title: "T4: Ep 25", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-25+O+estresse+do+saltit%C3%A3o.mp4" },
                { title: "T4: Ep 26", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-26+Entrando+Numa+Fria+-+HD+720p.mkv" },
                { title: "T4: Ep 27", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-27+Trailer+Disputado.mp4" },
                { title: "T4: Ep 28", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-28+Tudo+Por+Um+Beijo.mp4" },
                { title: "T4: Ep 29", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-29+Churrasco+de+Familia.mp4" },
                { title: "T4: Ep 30", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-30+O+Ultimo+Aparelho+de+disco+laser.mp4" },
                { title: "T4: Ep 31", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-31+O+Clube+de+Campo.mp4" },
                { title: "T4: Ep 32", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-32+Confian%C3%A7a+Cega.mp4" },
                { title: "T4: Ep 33", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-33+O+Melhor+chefe+do+mundo.mp4" },
                { title: "T4: Ep 34", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-34+A+Ultima+Refeicao.mp4" },
                { title: "T4: Ep 35", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-35+Os+Apanhadores+de+Sonhos+-+HD.mkv" },
                { title: "T4: Ep 36", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-36+Benson+e+Pete+Festeiros+-+HD.mkv" },
                { title: "T4: Ep 37", url: "https://archive.org/details/becker_show/Apenas+um+show+s4/04-37+Uma+noite+Muito+louca+-+HD.mkv" }
            ]
        });
    }
    return Promise.resolve({ streams: [] });
});

module.exports = builder.getInterface();
