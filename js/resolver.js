function resolveEntry(entry, mode = "interactive") {
  // caso simples: string direta
  if (typeof entry === "string") {
    return entry;
  }

  // modo SYNTH (phonemizer / futuro)
  if (mode === "synth") {
    if (entry.default) {
      const found = entry.entries.find(e => e.type === entry.default);
      if (found) return found.ipa;
    }
    return entry.entries[0].ipa;
  }

  // modo INTERATIVO (continua perguntando)
  return null; // o HTML continua chamando o popup
}
