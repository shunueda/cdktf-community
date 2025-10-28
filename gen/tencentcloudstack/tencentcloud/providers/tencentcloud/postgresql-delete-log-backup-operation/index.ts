// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlDeleteLogBackupOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation#db_instance_id PostgresqlDeleteLogBackupOperation#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation#id PostgresqlDeleteLogBackupOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log backup ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation#log_backup_id PostgresqlDeleteLogBackupOperation#log_backup_id}
  */
  readonly logBackupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation tencentcloud_postgresql_delete_log_backup_operation}
*/
export class PostgresqlDeleteLogBackupOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_delete_log_backup_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlDeleteLogBackupOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlDeleteLogBackupOperation to import
  * @param importFromId The id of the existing PostgresqlDeleteLogBackupOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlDeleteLogBackupOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_delete_log_backup_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/postgresql_delete_log_backup_operation tencentcloud_postgresql_delete_log_backup_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlDeleteLogBackupOperationConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlDeleteLogBackupOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_delete_log_backup_operation',
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
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._logBackupId = config.logBackupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // log_backup_id - computed: false, optional: false, required: true
  private _logBackupId?: string; 
  public get logBackupId() {
    return this.getStringAttribute('log_backup_id');
  }
  public set logBackupId(value: string) {
    this._logBackupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupIdInput() {
    return this._logBackupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      log_backup_id: cdktf.stringToTerraform(this._logBackupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      log_backup_id: {
        value: cdktf.stringToHclTerraform(this._logBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
