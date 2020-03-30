import React, { useState, } from "react";

import InitialHelpDialog from './InitialHelpDialog';
import InstructionsHelpDialog from './InstructionsHelpDialog';

export default function HelpScreen({ helpOpen, setHelpOpen }) {
    const [atInitial, setAtInitial] = useState(false); // SET TO TRUE IN PRODUCTION

    return atInitial
        ? <InitialHelpDialog open={helpOpen} onClose={() => setHelpOpen(false)} setAtInitial={setAtInitial} />
        : <InstructionsHelpDialog open={helpOpen} onClose={() => setHelpOpen(false)} />;
};