import type { Config } from "@measured/puck";


console.log("AI key present:", !!process.env.OPENAI_API_KEY);

import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  GermanSentenceBlock: {
    subject: string;
    verb: string;
    object: string;
    explanation: string;
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

    // 👇 NEW BLOCK
    GermanSentenceBlock: {
      fields: {
        subject: { type: "text", label: "Subject" },
        verb: { type: "text", label: "Verb" },
        object: { type: "text", label: "Object" },
        explanation: {
          type: "textarea",
          label: "Grammar explanation",
        },
      },

      defaultProps: {
        subject: "Ich",
        verb: "lerne",
        object: "Deutsch",
        explanation: "The verb is in second position in German main clauses.",
      },

      render: ({ subject, verb, object, explanation }) => {
        return (
          <div
            className="german-sentence-block"
            style={{
              padding: "1.5rem",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              margin: "1rem 0",
            }}
          >
            <div
              className="sentence"
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#333",
              }}
            >
              <span style={{ color: "#0066cc" }}>{subject}</span>{" "}
              <span style={{ color: "#cc6600" }}>{verb}</span>{" "}
              <span style={{ color: "#009900" }}>{object}</span>
            </div>

            {explanation && (
              <div
                className="explanation"
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  fontStyle: "italic",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid #e0e0e0",
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
