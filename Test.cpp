#include <iostream>
#include <vector>
#include <string>
#include <thread>
#include <chrono>

struct Slide {
    std::string title;
    std::vector<std::string> content;
};

void animateText(const std::vector<std::string>& lines) {
    for (const auto& line : lines) {
        std::cout << line << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(500));  // Staggered reveal
    }
}

void displaySlide(const Slide& slide) {
    std::cout << "\n=== " << slide.title << " ===\n\n";
    animateText(slide.content);
    std::this_thread::sleep_for(std::chrono::seconds(3));  // Pause before next slide
}

int main() {
    std::vector<Slide> slides = {
        {
            "Thales of Miletus: The First Philosopher",
            {
                "Thales of Miletus (c. 624–546 BC) was an ancient Greek pre-Socratic philosopher,",
                "mathematician, and astronomer from Miletus in Ionia (modern-day Turkey).",
                "He is often regarded as the father of Western philosophy and science.",
                "",
                "\"Know thyself.\"",
                "",
                "[Image: Ancient Greek statue of Thales]"
            }
        },
        {
            "Early Life and Background",
            {
                "Thales was born in Miletus, a prosperous Greek colony in Asia Minor.",
                "He traveled extensively, learning from Egyptian and Babylonian scholars.",
                "He was one of the Seven Sages of Greece, known for his wisdom and practical inventions.",
                "",
                "- Born around 624 BC in Miletus.",
                "- Traveled to Egypt and Babylon for knowledge.",
                "- Known for engineering feats, like diverting a river."
            }
        },
        {
            "Philosophical Contributions",
            {
                "Thales is credited with shifting from mythological explanations to rational inquiry.",
                "He proposed that water is the fundamental substance of the universe,",
                "marking the beginning of metaphysics.",
                "",
                "- First to ask 'What is the nature of reality?'",
                "- Believed everything originates from water.",
                "- Influenced later philosophers like Anaximander."
            }
        },
        {
            "Mathematical and Scientific Achievements",
            {
                "Thales introduced geometry to Greece and made significant astronomical predictions.",
                "His work laid the foundation for Euclidean geometry.",
                "",
                "- Predicted a solar eclipse in 585 BC.",
                "- Discovered theorems like the angle in a semicircle.",
                "- Measured pyramid heights using shadows."
            }
        },
        {
            "Legacy and Influence",
            {
                "Thales' ideas influenced the development of Western philosophy, science, and mathematics.",
                "He is remembered as a pioneer who bridged myth and reason.",
                "",
                "- Founder of the Milesian School.",
                "- Inspired Socrates, Plato, and Aristotle.",
                "- Symbol of intellectual curiosity."
            }
        },
        {
            "Conclusion",
            {
                "Thales of Miletus transformed human thought by emphasizing observation and reason over superstition.",
                "His legacy endures in modern science and philosophy.",
                "",
                "\"The most difficult thing in life is to know yourself.\"",
                "",
                "Thank you for exploring the life of Thales!"
            }
        }
    };

    std::cout << "Starting animated presentation about Thales of Miletus..." << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(1));

    for (const auto& slide : slides) {
        system("clear");  // Use "cls" on Windows
        displaySlide(slide);
    }

    std::cout << "\nPresentation complete!" << std::endl;
    return 0;
}
