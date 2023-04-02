import java.util.Vector;

public class Admin extends Person {

  public Integer accessLevel;

  public boolean banUser(User user) {
  return false;
  }

  public boolean unbanUser(User user) {
  return false;
  }

  public void deleteAnyPost(Post post) {
  }

}