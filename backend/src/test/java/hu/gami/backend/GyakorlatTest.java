package hu.gami.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import hu.gami.backend.modell.Gyakorlat;

public class GyakorlatTest {

    @Test
    void nevEsLeirasBeallitasa() {
        Gyakorlat gyakorlat = new Gyakorlat("Fekvenyomas", "Mell");

        assertEquals("Fekvenyomas", gyakorlat.getNev());
        assertEquals("Mell", gyakorlat.getLeiras());
    }
}
