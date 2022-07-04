import { StyleSheet } from 'react-native'

export const colors = {
  primary: '#5856D6'
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  btnBar: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
  },
  txtBtnBar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  avatar: {
    width: 120,
    height: 120
  },
  menuContainer: {
    marginTop: 30
  },
  menuItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    marginBottom: 2,
    marginHorizontal: 2
  },
  menuItemTouchable: {
    flexDirection: 'row',
    alignContent: 'center'
  }
})
