const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "community.apenasunshowt4oficial", 
    version: "4.0.0",
    name: "Apenas um Show - Links da T4",
    description: "Injeta os episódios dublados da 4ª Temporada na página oficial da série do Stremio.",
    resources: ["stream"], 
    types: ["series"]
};

const builder = new addonBuilder(manifest);

const linksepisodes = {
    1: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-01+Sa%C3%ADda+9B+-+HD+720p.mkv",
    2: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-02+O+faz+tudo.mkv",
    3: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-03+Contos+de+terror+no+parque+-+HD+720p.mkv",
    4: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-04+Concurso+de+tortas.mkv",
    5: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-05+O+Grande+Solo+-+HD.MKV",
    6: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-06+Carequinha+-+HD.mkv",
    7: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-07+Noite+da+rapaziada.mkv",
    8: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-08+Uma+flex%C3%A3o.mp4",
    9: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-09+Especial+de+Natal+-+HD+720p.mkv",
    10: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-10+Terca+feira.mkv",
    11: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-11+Correndo+Atr%C3%A1s+dos+Fogos+de+Artif%C3%ADcio+-+HD.mkv",
    12: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-12+O+fim+de+semana+comprido.mp4",
    13: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-13+Sanduiche+Mortal+-+HD+720p.mkv",
    14: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-14+Ser%C3%A1+que+Ace+Balthazar+est%C3%A1+Vivo+-+HD.mkv",
    15: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-15+Beijo+ou+fralda.mkv",
    16: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-16+Zoando+-+HD.mkv",
    17: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-17+Homem+das+Cavernas.mp4",
    18: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-18+Essa+Televis%C3%A3o+%C3%A9+Minha+-+HD.mkv",
    19: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-19+Um+Bando+de+Gansos+Grandes+-+HD.mkv",
    20: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-20+Me+engana+que+eu+nao+gosto.mp4",
    21: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-21+Almoco+na+limousine.mp4",
    22: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-22+buscando+a+margarete.mp4",
    23: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-23+Um+Pedido+Especial.mp4",
    24: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-24+Tudo+Por+um+show.mp4",
    25: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-25+O+estresse+do+saltit%C3%A3o.mp4",
    26: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-26+Entrando+Numa+Fria+-+HD+720p.mkv",
    27: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-27+Trailer+Disputado.mp4",
    28: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-28+Tudo+Por+Um+Beijo.mp4",
    29: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-29+Churrasco+de+Familia.mp4",
    30: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-30+O+Ultimo+Aparelho+de+disco+laser.mp4",
    31: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-31+O+Clube+de+Campo.mp4",
    32: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-32+Confian%C3%A7a+Cega.mp4",
    33: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-33+O+Melhor+chefe+do+mundo.mp4",
    34: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-34+A+Ultima+Refeicao.mp4",
    35: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-35+Os+Apanhadores+de+Sonhos+-+HD.mkv",
    36: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-36+Benson+e+Pete+Festeiros+-+HD.mkv",
    37: "https://archive.org/download/becker_show/Apenas+um+show+s4/04-37+Uma+noite+Muito+louca+-+HD.mkv"
};

builder.defineStreamHandler((args) => {
    if (args.type === "series" && args.id.startsWith("tt1710308:")) {
        const parts = args.id.split(":");
        const season = parseInt(parts[1]);
        const episode = parseInt(parts[2]);

        if (season === 4) {
            const videoUrl = linksepisodes[episode];
            if (videoUrl) {
                return Promise.resolve({
                    streams: [{ title: `🎥 Becker Stream (T4: Ep ${episode})`, url: videoUrl }]
                });
            }
        }
    }
    return Promise.resolve({ streams: [] });
});

// O próprio SDK do Stremio cria o servidor na porta correta exigida pelo Render
const { serveHTTP } = require("stremio-addon-sdk");
serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 });
