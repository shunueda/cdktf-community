// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverDatabaseTdeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database name list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde#db_names SqlserverDatabaseTde#db_names}
  */
  readonly dbNames: string[];
  /**
  * `enable` - enable encryption, `disable` - disable encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde#encryption SqlserverDatabaseTde#encryption}
  */
  readonly encryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde#id SqlserverDatabaseTde#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde#instance_id SqlserverDatabaseTde#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde tencentcloud_sqlserver_database_tde}
*/
export class SqlserverDatabaseTde extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_database_tde";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverDatabaseTde resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverDatabaseTde to import
  * @param importFromId The id of the existing SqlserverDatabaseTde that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverDatabaseTde to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_database_tde", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/sqlserver_database_tde tencentcloud_sqlserver_database_tde} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverDatabaseTdeConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverDatabaseTdeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_database_tde',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbNames = config.dbNames;
    this._encryption = config.encryption;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_names - computed: false, optional: false, required: true
  private _dbNames?: string[]; 
  public get dbNames() {
    return cdktf.Fn.tolist(this.getListAttribute('db_names'));
  }
  public set dbNames(value: string[]) {
    this._dbNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNamesInput() {
    return this._dbNames;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbNames),
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
