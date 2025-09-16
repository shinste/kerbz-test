import { View, Text, StyleSheet } from 'react-native';

const InfoBox = ({ userID, name, unreadCount }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.headerText}>User Information</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.dataHeader}>User ID</Text>
        <Text style={[styles.dataValue, { fontStyle: 'italic' }]}>
          {userID}
        </Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.dataHeader}>Name</Text>
        <Text style={styles.dataValue}>{name}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.dataHeader}>Unread Messages</Text>
        <Text style={[styles.dataValue, styles.unreadMessages]}>
          {unreadCount}
        </Text>
      </View>
    </View>
  );
};

export default InfoBox;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#1A1A1A',
    padding: 25,
    borderRadius: 12,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dataHeader: {
    color: '#A8BAC1',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dataValue: {
    color: 'white',
    fontSize: 15,
  },
  unreadMessages: {
    backgroundColor: '#FFA800',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    fontWeight: 'bold',
  },
});
