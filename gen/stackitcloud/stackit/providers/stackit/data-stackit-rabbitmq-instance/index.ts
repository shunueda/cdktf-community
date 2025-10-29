// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/rabbitmq_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitRabbitmqInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the RabbitMQ instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/rabbitmq_instance#instance_id DataStackitRabbitmqInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * STACKIT Project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/rabbitmq_instance#project_id DataStackitRabbitmqInstance#project_id}
  */
  readonly projectId: string;
}
export interface DataStackitRabbitmqInstanceParameters {
}

export function dataStackitRabbitmqInstanceParametersToTerraform(struct?: DataStackitRabbitmqInstanceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitRabbitmqInstanceParametersToHclTerraform(struct?: DataStackitRabbitmqInstanceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitRabbitmqInstanceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitRabbitmqInstanceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitRabbitmqInstanceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_timeout - computed: true, optional: false, required: false
  public get consumerTimeout() {
    return this.getNumberAttribute('consumer_timeout');
  }

  // enable_monitoring - computed: true, optional: false, required: false
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }

  // graphite - computed: true, optional: false, required: false
  public get graphite() {
    return this.getStringAttribute('graphite');
  }

  // max_disk_threshold - computed: true, optional: false, required: false
  public get maxDiskThreshold() {
    return this.getNumberAttribute('max_disk_threshold');
  }

  // metrics_frequency - computed: true, optional: false, required: false
  public get metricsFrequency() {
    return this.getNumberAttribute('metrics_frequency');
  }

  // metrics_prefix - computed: true, optional: false, required: false
  public get metricsPrefix() {
    return this.getStringAttribute('metrics_prefix');
  }

  // monitoring_instance_id - computed: true, optional: false, required: false
  public get monitoringInstanceId() {
    return this.getStringAttribute('monitoring_instance_id');
  }

  // plugins - computed: true, optional: false, required: false
  public get plugins() {
    return this.getListAttribute('plugins');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // sgw_acl - computed: true, optional: false, required: false
  public get sgwAcl() {
    return this.getStringAttribute('sgw_acl');
  }

  // syslog - computed: true, optional: false, required: false
  public get syslog() {
    return this.getListAttribute('syslog');
  }

  // tls_ciphers - computed: true, optional: false, required: false
  public get tlsCiphers() {
    return this.getListAttribute('tls_ciphers');
  }

  // tls_protocols - computed: true, optional: false, required: false
  public get tlsProtocols() {
    return this.getStringAttribute('tls_protocols');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/rabbitmq_instance stackit_rabbitmq_instance}
*/
export class DataStackitRabbitmqInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_rabbitmq_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitRabbitmqInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitRabbitmqInstance to import
  * @param importFromId The id of the existing DataStackitRabbitmqInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/rabbitmq_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitRabbitmqInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_rabbitmq_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/data-sources/rabbitmq_instance stackit_rabbitmq_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitRabbitmqInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitRabbitmqInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_rabbitmq_instance',
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
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf_guid - computed: true, optional: false, required: false
  public get cfGuid() {
    return this.getStringAttribute('cf_guid');
  }

  // cf_organization_guid - computed: true, optional: false, required: false
  public get cfOrganizationGuid() {
    return this.getStringAttribute('cf_organization_guid');
  }

  // cf_space_guid - computed: true, optional: false, required: false
  public get cfSpaceGuid() {
    return this.getStringAttribute('cf_space_guid');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataStackitRabbitmqInstanceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
