// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitMongodbFlexUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user#id DataStackitMongodbFlexUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * the mongo db flex instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user#instance_id DataStackitMongodbFlexUser#instance_id}
  */
  readonly instanceId: string;
  /**
  * The project ID the instance runs in. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user#project_id DataStackitMongodbFlexUser#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user stackit_mongodb_flex_user}
*/
export class DataStackitMongodbFlexUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_mongodb_flex_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitMongodbFlexUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitMongodbFlexUser to import
  * @param importFromId The id of the existing DataStackitMongodbFlexUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitMongodbFlexUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_mongodb_flex_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mongodb_flex_user stackit_mongodb_flex_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitMongodbFlexUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitMongodbFlexUserConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_mongodb_flex_user',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
