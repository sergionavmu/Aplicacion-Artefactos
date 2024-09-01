package abp.abpfollow.service;

import abp.abpfollow.dao.FriendsRepository;
import abp.abpfollow.model.Friends;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FriendService {
    @Autowired
    private FriendsRepository friendsRepository;

    @Autowired
    public ResponseEntity getFriends(){
        List<Friends> friends = this.friendsRepository.findAll();
        return ResponseEntity.ok(friends);
    }

    public ResponseEntity postFriends(Friends friends){
        this.friendsRepository.save(friends);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public ResponseEntity postAllFriends(ArrayList<Friends> friends){
        this.friendsRepository.saveAll(friends);
        return ResponseEntity.status(HttpStatus.CREATED).body(friends);
    }

    public ResponseEntity deleteFriends(int id){
        Optional<Friends> existFriend = this.friendsRepository.findById(id);
        if(existFriend.isPresent()){
            this.friendsRepository.delete(existFriend.get());
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
