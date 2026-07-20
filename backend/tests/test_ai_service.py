import os
import sys
import unittest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from ai_service import build_fallback_analysis, build_rewrite_example


class AiServiceTests(unittest.TestCase):
    def test_build_fallback_analysis_marks_matching_and_missing_skills(self):
        analysis = build_fallback_analysis(
            "Experienced Python developer with FastAPI and React experience.",
            "Python FastAPI React AWS Docker",
        )

        self.assertIn("Python", analysis["matching_skills"])
        self.assertIn("FastAPI", analysis["matching_skills"])
        self.assertIn("React", analysis["matching_skills"])
        self.assertIn("AWS", analysis["missing_keywords"])
        self.assertIn("Docker", analysis["missing_keywords"])

    def test_build_rewrite_example_creates_concrete_before_and_after_lines(self):
        example = build_rewrite_example("Built web applications with Python and React.")

        self.assertIn("Built", example["before"])
        self.assertIn("Python", example["after"])
        self.assertIn("React", example["after"])
        self.assertIn("improved", example["after"].lower())


if __name__ == "__main__":
    unittest.main()
