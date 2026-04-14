<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Découverte de l’Intelligence Artificielle</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      color: white;
      font-family: 'Poppins', sans-serif;
    }
    .slide {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }
    .active {
      opacity: 1;
      transform: translateY(0);
    }
    .btn {
      background-color: #0f3460;
      transition: background-color 0.3s ease;
    }
    .btn:hover {
      background-color: #533483;
    }
  </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen text-center p-4">
  <div id="slide-container" class="max-w-3xl bg-white/10 p-8 rounded-2xl shadow-xl">
    <h1 id="slide-title" class="text-3xl font-bold mb-4"></h1>
    <p id="slide-content" class="text-lg leading-relaxed"></p>
  </div>

  <div class="flex gap-4 mt-8">
    <button id="prev" class="btn px-4 py-2 rounded-lg">⬅ Précédent</button>
    <button id="next" class="btn px-4 py-2 rounded-lg">Suivant ➡</button>
  </div>

  <script>
    const slides = [
      {
        title: "Introduction",
        content: "Sujet choisi : L’intelligence artificielle (IA)<br>Durée du projet : 20 jours, 10 min par jour.<br>Objectif : comprendre comment l’IA fonctionne et son impact sur notre quotidien."
      },
      {
        title: "Qu’est-ce que l’IA ?",
        content: "L’IA est la capacité d’une machine à imiter l’intelligence humaine.<br>Elle permet aux ordinateurs d’apprendre à partir des données.<br>Exemples : Siri, voitures autonomes, ChatGPT."
      },
      {
        title: "Ce que j’ai appris (1)",
        content: "L’IA utilise des algorithmes et des réseaux de neurones.<br>Le machine learning permet aux machines de s’améliorer toutes seules.<br>Les données sont essentielles pour l’IA."
      },
      {
        title: "Ce que j’ai appris (2)",
        content: "Applications :<br>🩺 Santé – aide au diagnostic<br>💰 Économie – détection de fraude<br>🎨 Art – génération d’images et musique<br>🎓 Éducation – outils d’apprentissage personnalisés"
      },
      {
        title: "Mon expérience personnelle",
        content: "Chaque jour, j’ai lu ou écouté un expert.<br>J’ai découvert que l’IA n’est pas magique, mais logique.<br>J’ai envie d’en apprendre plus sur la programmation et la technologie."
      },
      {
        title: "Conclusion",
        content: "L’IA transforme notre monde.<br>Comprendre ses principes aide à mieux l’utiliser.<br>Prochaine étape : créer mes propres petits projets d’IA !"
      }
    ];

    let currentSlide = 0;

    const titleEl = document.getElementById("slide-title");
    const contentEl = document.getElementById("slide-content");
    const container = document.getElementById("slide-container");

    function showSlide(index) {
      container.classList.remove("active");
      setTimeout(() => {
        titleEl.innerHTML = slides[index].title;
        contentEl.innerHTML = slides[index].content;
        container.classList.add("active");
      }, 200);
    }

    document.getElementById("next").addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    document.getElementById("prev").addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    // Initialize
    showSlide(currentSlide);
    container.classList.add("active");
  </script>
</body>
</html>
