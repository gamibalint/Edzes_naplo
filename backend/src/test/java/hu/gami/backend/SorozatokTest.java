package hu.gami.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import hu.gami.backend.modell.Sorozatok;

public class SorozatokTest {

    @Test
    void datumSorozatokEllenorzes() {
        Sorozatok sorozatok = new Sorozatok();
        sorozatok.setIsm(10);
        sorozatok.setSuly(50.0);
        sorozatok.setId(1L);

        assertEquals(10, sorozatok.getIsm());
        assertEquals(50.0, sorozatok.getSuly());
        assertEquals(1L, sorozatok.getId());
    }
}
