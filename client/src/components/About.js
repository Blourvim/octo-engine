import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import SkillRating from './SkillRating';
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header:{
    textAlign:'center',
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}variant={'h2'}>About Me</Typography>
        </Grid>
       
       
        <Grid item xs={3} sm={2}>
  <SkillRating value={5} skill={'Javascript'}/>
  <SkillRating value={3} skill={'Adobe Photoshop'}/>
  <SkillRating value={2} skill={'React'}/>
  <SkillRating value={5} skill={'HTML'}/>
  <SkillRating value={5} skill={'Search Engine Optimization'}/>
  <SkillRating value={3} skill={'CSS'}/>
  <SkillRating value={5} skill={'Problem Solving'}/>
  <SkillRating value={5} skill={'Materiel UI'}/>

        </Grid>
        <Grid item xs={2} sm={2}>
  <SkillRating value={4} skill={'Web Security'}/> 
  <SkillRating value={5} skill={'Nodejs'}/>
  <SkillRating value={5} skill={'Authentication'}/>
  <SkillRating value={5} skill={'Autherization'}/>
  <SkillRating value={5} skill={"RESTful API's"}/>
  <SkillRating value={5} skill={'GraphQL'}/>
  <SkillRating value={5} skill={'Database Knowledge'}/>
  <SkillRating value={5} skill={'MongoDB'}/>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>

Consequuntur hic eos qui quo. Nemo ad aut et minima alias ipsum exercitationem. Sed totam est veniam nobis perspiciatis adipisci maiores asperiores.

Quidem neque provident perferendis quibusdam. Ducimus officiis et dolores eius suscipit. Iure laborum ut eaque.

Quo quam provident aut. Eos vel dicta architecto et ipsa. Animi ut qui est cumque voluptatum quia. Beatae aut quis quia saepe repudiandae dolores voluptas.

Ut non fugiat tempore. Quam ut quo in voluptatem necessitatibus ex fugiat sit. Assumenda et quidem corporis. Ut autem error non quia quia ut porro rerum. Error nulla asperiores aut ab qui perspiciatis. Est sunt blanditiis aut explicabo deleniti facilis odit.

Eum ut doloremque quis dicta omnis libero. Molestiae in veritatis eius consequatur beatae sed aut. Eveniet ex in veniam voluptatem aliquid ad. Sint quidem voluptatem et maiores.


Consequuntur hic eos qui quo. Nemo ad aut et minima alias ipsum exercitationem. Sed totam est veniam nobis perspiciatis adipisci maiores asperiores.

Quidem neque provident perferendis quibusdam. Ducimus officiis et dolores eius suscipit. Iure laborum ut eaque.

Quo quam provident aut. Eos vel dicta architecto et ipsa. Animi ut qui est cumque voluptatum quia. Beatae aut quis quia saepe repudiandae dolores voluptas.

Ut non fugiat tempore. Quam ut quo in voluptatem necessitatibus ex fugiat sit. Assumenda et quidem corporis. Ut autem error non quia quia ut porro rerum. Error nulla asperiores aut ab qui perspiciatis. Est sunt blanditiis aut explicabo deleniti facilis odit.

Eum ut doloremque quis dicta omnis libero. Molestiae in veritatis eius consequatur beatae sed aut. Eveniet ex in veniam voluptatem aliquid ad. Sint quidem voluptatem et maiores.



Consequuntur hic eos qui quo. Nemo ad aut et minima alias ipsum exercitationem. Sed totam est veniam nobis perspiciatis adipisci maiores asperiores.

Quidem neque provident perferendis quibusdam. Ducimus officiis et dolores eius suscipit. Iure laborum ut eaque.

Quo quam provident aut. Eos vel dicta architecto et ipsa. Animi ut qui est cumque voluptatum quia. Beatae aut quis quia saepe repudiandae dolores voluptas.

Ut non fugiat tempore. Quam ut quo in voluptatem necessitatibus ex fugiat sit. Assumenda et quidem corporis. Ut autem error non quia quia ut porro rerum. Error nulla asperiores aut ab qui perspiciatis. Est sunt blanditiis aut explicabo deleniti facilis odit.

Eum ut doloremque quis dicta omnis libero. Molestiae in veritatis eius consequatur beatae sed aut. Eveniet ex in veniam voluptatem aliquid ad. Sint quidem voluptatem et maiores.


</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
