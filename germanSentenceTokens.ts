
export const sentenceThemes = {
    neutral: {
      container: {
        background: "#f9f9f9",
        border: "#e0e0e0",
      },
      text: "#333",
      explanation: "#666",
    },
  
    example: {
      container: {
        background: "#f0f7ff",
        border: "#cce0ff",
      },
      text: "#003366",
      explanation: "#335577",
    },
  
    warning: {
      container: {
        background: "#fff6f0",
        border: "#ffd6bf",
      },
      text: "#663300",
      explanation: "#884400",
    },
  } as const;
  
  export const wordRoles = {
    subject: "#0066cc",
    verb: "#cc6600",
    object: "#009900",
  } as const;
  
  export const emphasisLevels = {
    low: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    medium: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    high: {
      fontSize: "1.4rem",
      fontWeight: 700,
    },
  } as const;
  