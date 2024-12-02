import quora from "@/assets/projects/quora.png";
import chatbot from "@/assets/projects/chatbot.png"
import urban1 from "@/assets/projects/urban1.png"


export const ProjectList = [
  {
    id: 1,
    name: "Urban Sound Classifier",
    description: [
      "Designed a neural network model with TensorFlow for classifying urban sounds, attaining an accuracy of 86.8% on the UrbanSound8K dataset.",
      "Employed Mel-Frequency Cepstral Coefficients (MFCCs) for effective feature extraction, converting audio signals into 40-dimensional feature vectors.",
      "Processed over 8,700 samples, improving the model’s ability to distinguish various urban sounds.",
      //"Enhanced environmental monitoring and urban planning efforts by providing insights into sound classification.",
    ],
    img: urban1,
    //max 6 tech stack
    tech: ["Deep Learning", "TensorFlow", "MFCC", "UrbanSound8K Dataset"],
    source: "https://github.com/DevrathMukesh/DevrathMukesh-UrbanSoundClassifierNN",
    demo: "https://devrathmukesh-urbansoundclassifiernn-bvzccdyxvazzrhfiepjrso.streamlit.app/", // You can add a demo if you have a web interface for it
  },
  {
    id: 2,
    name: "Duplicate Question Detection on Quora",
    description: [
      "Developed an advanced model to detect duplicate questions on Quora, significantly enhancing search efficiency and reducing content redundancy.",
      "Engineered advanced text preprocessing techniques, including TF-IDF, Word2Vec embeddings, and similarity metrics, to enrich feature quality for accurate classification.",
      "Achieved 79% accuracy with XGBoost, and implemented LSTM, BiLSTM, and GRU models, achieving up to 72% accuracy.",
    ],
    img: quora,
    tech: ["Machine Learning", "NLP", "XGBoost", "LSTM", "BiLSTM", "GRU"],
    source: "https://github.com/DevrathMukesh/quora-question-pair-classification",
    demo: "https://quora-question-pair-classification-88vp3rbqfzzhsqr3mqpu7d.streamlit.app/", // Add demo if you have one
  },
  {
    id: 3,
    name: "Punjabi Chat Bot for Farmers",
    description: [
      "Engineered the backend and integrated advanced NLP libraries for Punjabi and Hindi, enhancing query processing accuracy by 40%.",
      "Architected and developed 2 key user interfaces, with iterative testing conducted to improve usability by 30%.",
      "Designed features to deliver real-time agricultural insights and government scheme updates, aimed at supporting over 5,000 farmers in future deployment.",
    ],
    img: chatbot,
    //max 6 tech stack
    tech: ["Machine Learning", "NLP", "AI", "Punjabi", "Hindi"],
    source: "https://github.com/DevrathMukesh/punjabi-chatbot-farmers",
    demo: null, // Add demo if available
  },
];
