from PIL import Image
import os

# Lista de caminhos dos arquivos
caminho_arquivos = [
    r"C:\\Users\\du_vn\\JavaScript_Code\\11\\carrossel_v2\\img\\teclado\\01.jpg",
    r"C:\\Users\\du_vn\\JavaScript_Code\\11\\carrossel_v2\\img\\teclado\\02.jpg",
    r"C:\\Users\\du_vn\\JavaScript_Code\\11\\carrossel_v2\\img\\teclado\\03.jpg"
]

# Novo tamanho para as imagens
novo_tamanho = (500, 500)

# Lista para armazenar os caminhos das imagens redimensionadas
caminho_arq_redimensionados = []

for arquivo in caminho_arquivos:
    if not os.path.exists(arquivo):  # Verificar se o arquivo existe
        print(f"Arquivo não encontrado: {arquivo}")
        continue

    with Image.open(arquivo) as imagem:
        # Redimensionar a imagem
        imagem_nova = imagem.resize(novo_tamanho)

        # Gerar um novo caminho para a imagem redimensionada
        redimensionado = arquivo.replace(".jpg", "_nova.jpg")

        # Salvar a nova imagem
        imagem_nova.save(redimensionado)
        caminho_arq_redimensionados.append(redimensionado)

# Imprimir os caminhos das imagens redimensionadas
print("Imagens redimensionadas:", caminho_arq_redimensionados)
