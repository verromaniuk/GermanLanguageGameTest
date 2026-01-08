import React from 'react';

export interface GermanSentenceBlockProps {
  subject: string;
  verb: string;
  object: string;
  explanation: string;
}

export const GermanSentenceBlock: React.FC<GermanSentenceBlockProps> = ({
  subject,
  verb,
  object,
  explanation,
}) => {
  return (
    <div className="german-sentence-block" style={{ 
      padding: '1.5rem',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      margin: '1rem 0'
    }}>
      <div className="sentence" style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: '#333'
      }}>
        <span className="subject" style={{ color: '#0066cc' }}>{subject}</span>
        {' '}
        <span className="verb" style={{ color: '#cc6600' }}>{verb}</span>
        {' '}
        <span className="object" style={{ color: '#009900' }}>{object}</span>
      </div>
      {explanation && (
        <div className="explanation" style={{
          fontSize: '0.9rem',
          color: '#666',
          fontStyle: 'italic',
          paddingTop: '0.75rem',
          borderTop: '1px solid #e0e0e0'
        }}>
          {explanation}
        </div>
      )}
    </div>
  );
};
