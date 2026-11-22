package hu.gami.backend.modell;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Sorozatok {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long edzesId;
    private Long gyakorlatId;
    private Double suly;
    private Integer ism;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEdzesId() {
        return edzesId;
    }

    public void setEdzesId(Long edzesId) {
        this.edzesId = edzesId;
    }

    public Long getGyakorlatId() {
        return gyakorlatId;
    }

    public void setGyakorlatId(Long gyakorlatId) {
        this.gyakorlatId = gyakorlatId;
    }

    public Double getSuly() {
        return suly;
    }

    public void setSuly(Double suly) {
        this.suly = suly;
    }

    public Integer getIsm() {
        return ism;
    }

    public void setIsm(Integer ism) {
        this.ism = ism;
    }

    public Sorozatok() {

    }
}
