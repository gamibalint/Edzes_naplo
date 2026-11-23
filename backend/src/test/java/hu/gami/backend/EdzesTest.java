package hu.gami.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import hu.gami.backend.modell.Edzes;

import java.time.LocalDate;

public class EdzesTest {

    @Test
    void datumEllenorzes() {
        Edzes edzes = new Edzes(LocalDate.of(2026,11,23), "Mell nap");

        assertEquals(LocalDate.of(2026,11,23), edzes.getDatum());
        assertEquals("Mell nap", edzes.getMegnevezes());
    }
}
