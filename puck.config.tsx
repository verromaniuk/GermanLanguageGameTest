import type { Config } from "@measured/puck";
import {
  sentenceThemes,
  wordRoles,
  emphasisLevels,
} from "./germanSentenceTokens";


//console.log("AI key present:", !!process.env.OPENAI_API_KEY);


type Props = {
  HeadingBlock: { title: string };
  GermanSentenceBlock: {
    subject: string;
    verb: string;
    object: string;
    explanation: string;
    theme: keyof typeof sentenceThemes;
    emphasis: keyof typeof emphasisLevels;
  };
};

const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },

    GermanSentenceBlock: {
      fields: {
        subject: { type: "text", label: "Subject" },
        verb: { type: "text", label: "Verb" },
        object: { type: "text", label: "Object" },
    
        explanation: {
          type: "textarea",
          label: "Grammar explanation",
        },
    
        theme: {
          type: "select",
          label: "Sentence type",
          options: [
            { label: "Neutral", value: "neutral" },
            { label: "Example", value: "example" },
            { label: "Common mistake", value: "warning" },
          ],
        },
    
        emphasis: {
          type: "select",
          label: "Visual emphasis",
          options: [
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ],
        },
      },
    
      defaultProps: {
        subject: "Ich",
        verb: "lerne",
        object: "Deutsch",
        explanation: "The verb is in second position in German main clauses.",
        theme: "example",
        emphasis: "medium",
      },


      render: ({
        subject,
        verb,
        object,
        explanation,
        theme,
        emphasis,
      }) => {
        const resolvedTheme = theme ?? "neutral";
        const resolvedEmphasis = emphasis ?? "medium";

        const themeTokens = sentenceThemes[resolvedTheme];
        const emphasisTokens = emphasisLevels[resolvedEmphasis];
      
        return (
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "8px",
              margin: "1rem 0",
              backgroundColor: themeTokens.container.background,
              border: `1px solid ${themeTokens.container.border}`,
            }}
          >
            <div
              style={{
                ...emphasisTokens,
                marginBottom: "1rem",
                color: themeTokens.text,
              }}
            >
              <span style={{ color: wordRoles.subject }}>{subject}</span>{" "}
              <span style={{ color: wordRoles.verb }}>{verb}</span>{" "}
              <span style={{ color: wordRoles.object }}>{object}</span>
            </div>
      
            {explanation && (
              <div
                style={{
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  paddingTop: "0.75rem",
                  borderTop: `1px solid ${themeTokens.container.border}`,
                  color: themeTokens.explanation,
                }}
              >
                {explanation}
              </div>
            )}
          </div>
        );
      },
    },
  },
};

export default config;
