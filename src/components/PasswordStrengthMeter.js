import React from 'react';

function getStrength(password) {
  let score = 0;
  if (!password) return score;
  if (password.length > 7) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

function PasswordStrengthMeter({ password }) {
  const score = getStrength(password);
  const levels = ['Weak', 'Okay', 'Good', 'Strong'];
  const colors = ['red', 'orange', 'yellow', 'green'];
  return (
    <div className="mt-2">
      <div className="h-2 w-full bg-gray-300 rounded">
        <div
          className={`h-2 rounded transition-all`}
          style={{
            width: `${(score / 4) * 100}%`,
            backgroundColor: colors[score - 1] || 'red',
          }}
        />
      </div>
      <span className={`text-sm ${score > 2 ? 'text-green-600' : 'text-red-600'}`}>
        {levels[score - 1] || 'Too short'}
      </span>
    </div>
  );
}

export default PasswordStrengthMeter;