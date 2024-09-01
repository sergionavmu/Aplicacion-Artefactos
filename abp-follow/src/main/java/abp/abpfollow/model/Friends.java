package abp.abpfollow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@Entity
@Table(name = "Friends")
public class Friends {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;


    @ManyToMany(mappedBy = "myFriends")
    private Set<Usuario> usuarios = new HashSet<>();

    public Friends() {
    }

}
