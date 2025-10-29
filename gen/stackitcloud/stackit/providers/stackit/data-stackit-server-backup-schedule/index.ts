// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitServerBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup schedule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule#backup_schedule_id DataStackitServerBackupSchedule#backup_schedule_id}
  */
  readonly backupScheduleId: number;
  /**
  * STACKIT Project ID to which the server is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule#project_id DataStackitServerBackupSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule#region DataStackitServerBackupSchedule#region}
  */
  readonly region?: string;
  /**
  * Server ID for the backup schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule#server_id DataStackitServerBackupSchedule#server_id}
  */
  readonly serverId: string;
}
export interface DataStackitServerBackupScheduleBackupProperties {
}

export function dataStackitServerBackupScheduleBackupPropertiesToTerraform(struct?: DataStackitServerBackupScheduleBackupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitServerBackupScheduleBackupPropertiesToHclTerraform(struct?: DataStackitServerBackupScheduleBackupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitServerBackupScheduleBackupPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitServerBackupScheduleBackupProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitServerBackupScheduleBackupProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }

  // volume_ids - computed: true, optional: false, required: false
  public get volumeIds() {
    return this.getListAttribute('volume_ids');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule stackit_server_backup_schedule}
*/
export class DataStackitServerBackupSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_server_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitServerBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitServerBackupSchedule to import
  * @param importFromId The id of the existing DataStackitServerBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitServerBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_server_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/server_backup_schedule stackit_server_backup_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitServerBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitServerBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_server_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupScheduleId = config.backupScheduleId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_properties - computed: true, optional: false, required: false
  private _backupProperties = new DataStackitServerBackupScheduleBackupPropertiesOutputReference(this, "backup_properties");
  public get backupProperties() {
    return this._backupProperties;
  }

  // backup_schedule_id - computed: false, optional: false, required: true
  private _backupScheduleId?: number; 
  public get backupScheduleId() {
    return this.getNumberAttribute('backup_schedule_id');
  }
  public set backupScheduleId(value: number) {
    this._backupScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleIdInput() {
    return this._backupScheduleId;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rrule - computed: true, optional: false, required: false
  public get rrule() {
    return this.getStringAttribute('rrule');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_schedule_id: cdktf.numberToTerraform(this._backupScheduleId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      server_id: cdktf.stringToTerraform(this._serverId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_schedule_id: {
        value: cdktf.numberToHclTerraform(this._backupScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
