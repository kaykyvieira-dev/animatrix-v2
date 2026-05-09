// 1. Memória: Array de Objetos com 15 animes
const catalogo = [
    { nome: "One Piece", 
        genero: "Aventura", 
        nota: 9.8, 
        censura: 12, 
        linkImagem: "../img/onepierce.jpg", 
        resumo: "Luffy procura o tesouro supremo para ser o Rei dos Piratas.", 
        curiosidade: "Eiichiro Oda dorme apenas 3 horas por dia.", 
        episodios: 1080 
    },

    { nome: "Berserk", 
        genero: "Seinen", 
        nota: 9.3, 
        censura: 18, 
        linkImagem: "../img/Berserk.webp", 
        resumo: "Guts, um mercenário solitário, caça demónios num mundo medieval.", 
        curiosidade: "Inspirou toda a estética de Dark Souls.", 
        episodios: 25 
    },

    { nome: "Hunter x Hunter", 
        genero: "Ação", 
        nota: 9.9, 
        censura: 14, 
        linkImagem: "../img/hunter.webp", 
        resumo: "Gon quer tornar-se um Hunter para encontrar o seu pai.", 
        curiosidade: "O autor é casado com a criadora de Sailor Moon.", 
        episodios: 148 
    },

    { nome: "Death Note", 
        genero: "Suspense", 
        nota: 9.0, 
        censura: 16, 
        linkImagem: "../img/DeathNote.jpg", 
        resumo: "Um estudante encontra um caderno que pode matar pessoas.", 
        curiosidade: "O protagonista Light não usa borracha no caderno.", 
        episodios: 37 
    },

    { nome: "Naruto Shippuden", 
        genero: "Shonen", 
        nota: 8.8, 
        censura: 12, 
        linkImagem: "../img/naruto.jpg", 
        resumo: "Um ninja que carrega uma raposa dentro de si busca respeito.", 
        curiosidade: "Naruto foi planeado originalmente para ser um programa de culinária.", 
        episodios: 500 
    },

    { nome: "Attack on Titan", 
      genero: "Drama/Ação", 
      nota: 9.6, 
      censura: 18, 
      linkImagem: "../img/AttackTitan.jpg", 
      resumo: "A humanidade vive presa em muralhas fugindo de gigantes.", 
      curiosidade: "Os Titãs foram inspirados em clientes bêbados do autor.", 
      episodios: 87 
    },

    { nome: "Fullmetal Alchemist: B", 
        genero: "Aventura", 
        nota: 9.9, censura: 14, 
        linkImagem: "../img/FMAB.webp", 
        resumo: "Dois irmãos tentam recuperar os seus corpos através da alquimia.", 
        curiosidade: "A autora cresceu numa quinta de gado.", 
        episodios: 64 
    },
    { nome: "Dragon Ball Z", 
        genero: "Luta", 
        nota: 9.1, 
        censura: 10, 
        linkImagem: "../img/dra.jpg", 
        resumo: "Goku e os seus amigos defendem a Terra de ameaças espaciais.", 
        curiosidade: "O nome 'Saiyajin' é um trocadilho com 'legumes'.", 
        episodios: 291 
    },

    { nome: "Demon Slayer", 
        genero: "Ação", 
        nota: 9.2, 
        censura: 14, 
        linkImagem: "../img/Demon.jpg", 
        resumo: "Tanjiro torna-se um caçador de onis para salvar a sua irmã.", 
        curiosidade: "A máscara de Urokodaki esconde o seu rosto gentil.", 
        episodios: 55 
    },

    { nome: "Jujutsu Kaisen", 
        genero: "Sobrenatural", 
        nota: 8.9, censura: 16, 
        linkImagem: "../img/jut.jpg", 
        resumo: "Estudantes lutam contra maldições usando energia amaldiçoada.", 
        curiosidade: "Gojo usa a venda para não sobrecarregar o cérebro.", 
        episodios: 47 
    },

    { nome: "Bleach", 
        genero: "Ação", 
        nota: 8.5, 
        censura: 14, 
        linkImagem: "..//img/Bleach.jpg", 
        resumo: "Ichigo torna-se um Shinigami substituto para proteger os vivos.", 
        curiosidade: "O autor Tite Kubo adora desenhar moda italiana.",
        episodios: 366 
    },

    { nome: "Solo Leveling", 
        genero: "Fantasia", 
        nota: 8.7, 
        censura: 14, 
        linkImagem: "..//img/solo.jpg", 
        resumo: "O caçador mais fraco do mundo ganha a habilidade de subir de nível.", 
        curiosidade: "É baseado num Manhwa (Coreia do Sul), não num mangá.", 
        episodios: 12 
    },

    { nome: "Vinland Saga", 
        genero: "Épico", 
        nota: 9.4, 
        censura: 18, 
        linkImagem: "..//img/vin.jpg", 
        resumo: "Um jovem viking busca vingança num mundo de guerras reais.", 
        curiosidade: "Muitos personagens existiram na história real.", 
        episodios: 48 
    },

    { nome: "Spy x Family", 
        genero: "Comédia", 
        nota: 8.9, 
        censura: 10, 
        linkImagem: "../img/spyf.webp", 
        resumo: "Um espião forma uma família falsa sem saber que a filha lê mentes.", 
        curiosidade: "Anya é o personagem mais popular da série.", 
        episodios: 37 
    },

    { nome: "Black Clover",
     genero: "Magia", 
     nota: 8.3,
      censura: 12, 
      linkImagem: "../img/bla.jpg", 
      resumo: "Asta nasceu sem magia num mundo onde todos têm poderes.", 
      curiosidade: "Asta grita em média 5 vezes por minuto no início.",
      episodios: 170 
    }
];

// Lógica do Motor
let idadeUsuario = parseInt(prompt("Qual a sua idade?"));
const container = document.getElementById('catalogo-container');

catalogo.forEach(anime => {
    // Porta Lógica (&&): Premium se Nota > 9 E Episódios > 100
    const ePremium = (anime.nota > 9 && anime.episodios > 100);
    
    // Operador Ternário: Verifica se deve aplicar o Blur (Censura)
    const bloqueado = idadeUsuario < anime.censura;

    // Gerar o HTML
    container.innerHTML += `
        <div class="card ${ePremium ? 'premium' : ''}">
            ${bloqueado ? '<div class="aviso-restrito">CONTEÚDO RESTRITO (+'+anime.censura+')</div>' : ''}
            
            <div class="img-container ${bloqueado ? 'blur' : ''}">
                <img src="${anime.linkImagem}">
            </div>

            <div class="content ${bloqueado ? 'blur' : ''}">
                <h2>${anime.nome}</h2>
                <span class="nota">★ ${anime.nota}</span>
                <p class="resumo"><strong>Resumo:</strong> ${anime.resumo}</p>
                <div class="curiosidade">
                    <strong>Você sabia?</strong><br>
                    ${anime.curiosidade}
                </div>
            </div>
        </div>
    `;
});