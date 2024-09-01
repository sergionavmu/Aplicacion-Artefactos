package abp.abpfollow.dao;

import abp.abpfollow.model.CodigoQR;
import abp.abpfollow.model.Friends;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FriendsRepository extends JpaRepository<Friends, Integer> {

    Optional<Friends> findById(int id);
}
